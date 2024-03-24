import React from "react";
import Navbar from "./Navbar";
import Footer from "./footern";
const parents = () => {
  return (
    <>
      <Navbar />
      <div className="p-10 ">
        <h1 className=" bg-black text-white p-2 text-3xl text-center mt-10 mb-6 ml-6 ">
          Guidelines For Parents
        </h1>
        <div className="list text-wrap pl-7 space-y-3 ">
          <li className="">
            Kindly pay attention to your ward’s regularity and punctuality and
            co-operate with us to reinforce the values of discipline in your
            ward/s.
          </li>
          <li>
            Check your ward’s bag for any circulars, worksheets, homework etc.
            given in the almanac or otherwise.
          </li>
          <li>
            All communication made by you should be addressed only to the
            Principal.
          </li>
          <li>
            For security reasons, avoid taking half day leave for your ward. In
            case of emergency, please take a written permission from the
            Principal.
          </li>
          <li>
            Please do not send your child to school, when she/he is sick. No
            student is permitted to go home after the weekly test except in
            genuine cases.
          </li>
          <li>
            Do not supplement a leave with a medical certificate unless it is
            genuine. It casts a negative effect on the child and inspires the
            child to stand on a platform of lies causing an irreparable loss to
            the holistic development of the child and hampering our efforts to
            educate your child to adhere to rules and principles.
          </li>
          <li>
            Any observation or complaint should be made directly to the class
            teacher and subsequently to the concerned teacher .If the problem
            still persists, you may address the same to the Principal.
          </li>
          <li>
            Kindly do not disturb the teachers during class hours. With the
            prior permission of the Principal, you may contact the teacher,
            before/after the class hours or during the time allotted..
          </li>
          <li>
            Criticism of any teacher /school in the presence of the child must
            be avoided so that the child does not lose confidence in her/his
            teacher/school.
          </li>
          <li>
            Retain the receipt of fees as proof of payment of fees and produce
            it on demand.
          </li>
          <li>
            Kindly label all belongings and clearly with the name , class,
            section & roll no. of your child.
          </li>
          <li>
            Kindly ensure that you send fruits and healthy food for your child
            to consume during fruit break and recess. Avoid sending junk food of
            any kind in the tiffin.
          </li>
          <li>
            Please inform the school authorities immediately in case of change
            in address and phone numbers.
          </li>
          <li>
            Only students from classes LKG to III are permitted to come to
            school in casual dress on their birthdays. Except toffees, no other
            gifts or eatables are to be distributed to their classmates.
          </li>
          <li>
            Please ensure that materials required for class activities/
            competitions are sent on the dates specified.
          </li>
          <li>
            In case of any emergency, the child will be permitted to leave
            school during school hours, with prior written permission from the
            Principal. A gate pass will be issued by the school office and the
            child will be allowed to leave only if escorted by the parent. The
            gate pass to be signed by parent and to be deposited at the school
            gate on exit.
          </li>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default parents;
