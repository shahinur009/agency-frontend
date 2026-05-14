import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const VerifyPerson = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVerifyUserData = async () => {
      try {
        const res = await fetch(
          `https://backend.lsf.mn/api/visa-pdf-info?visa_number=${id}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await res.json();
        if (!json || !json.id) {
          throw new Error("No user found");
        }
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchVerifyUserData();
  }, [id]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="card bg-base-100 shadow-md border border-base-200 max-w-[700px] w-full">
          <div className="text-center card-body">
            <h2 className="mb-3 text-xl font-bold card-title text-error">
              Error
            </h2>
            <p className="text-sm text-base-content">
              {error}. Please try again or check the visa number.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="card bg-base-100 shadow-md border border-base-200 max-w-[700px] w-full">
          <div className="text-center card-body">
            <h2 className="mb-3 text-xl font-bold card-title text-base-content">
              Loading...
            </h2>
            <div className="w-6 h-6 mx-auto border-b-2 rounded-full animate-spin border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-white">
      <div className="card shadow-md border-b max-w-[900px] w-full pb-8">
        <div className="px-8 py-4 border-b">
          <h2 className="text-2xl font-bold card-title">Зөвшөөрлийн мэдээлэ</h2>
        </div>
        <div className="px-8">
          <iframe
            title="Зөвшөөрлийн мэдээлэл"
            class="approval_iframe__ZYXrj"
            src={data.new_pdf_url}
            frameborder="0"
            bis_size='{"x":317,"y":181,"w":630,"h":943,"abs_x":317,"abs_y":181}'
            spellcheck="false"
            className="w-full h-dvh"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
