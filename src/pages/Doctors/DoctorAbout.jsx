import React from "react";
import { formetDate } from "../../utilits/formetDate";
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Muhibur Rahman
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
          repellat perferendis tenetur, enim placeat est? Molestiae fugiat
          pariatur vel aliquam. Commodi natus suscipit omnis soluta harum
          nostrum ex nesciunt? Aliquid?
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formetDate("9-14-2014")} - {formetDate("5-14-2016")}
              </span>
              <p className="text[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text[14px] leading-6 font-medium text-textColor">
              Apollo Hospital,Chennai,India
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formetDate("7-04-2010")} - {formetDate("9-14-2014")}
              </span>
              <p className="text[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text[14px] leading-6 font-medium text-textColor">
              Apollo Hospital,Chennai,India
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formetDate("7-04-2010")} - {formetDate("9-14-2014")}
              <p className="text[16px] leading-6 font-medium text-textColor">
                Sr.Surgeon
              </p>{" "}
              <p className="text[14px] leading-5 font-medium text-textColor">
                Apollo Hospital,Chennai,India
              </p>
            </span>
          </li>
          <li className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formetDate("7-04-2010")} - {formetDate("9-14-2014")}
              <p className="text[16px] leading-6 font-medium text-textColor">
                Sr.Surgeon
              </p>{" "}
              <p className="text[14px] leading-5 font-medium text-textColor">
                Apollo Hospital,Chennai,India
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
