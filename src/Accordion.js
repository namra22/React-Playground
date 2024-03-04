import React from "react";
import { useState } from "react";
const questions = [
  {
    id: 0,
    question: "How do you call function named (myFunction)? ",
    answers:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fringilla quam. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eget orci at nunc accumsan eleifend. Phasellus vel elit ut tortor fermentum bibendum. Vivamus fermentum, mauris vel fermentum euismod, orci leo tincidunt justo, sit amet tristique ex quam at arcu. Suspendisse potenti. Nullam nec orci nec libero tristique sagittis.",
  },
  {
    id: 1,
    question: "Which of the following is a server-side Java Script object? ",
    answers:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fringilla quam. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eget orci at nunc accumsan eleifend. Phasellus vel elit ut tortor fermentum bibendum. Vivamus fermentum, mauris vel fermentum euismod, orci leo tincidunt justo, sit amet tristique ex quam at arcu. Suspendisse potenti. Nullam nec orci nec libero tristique sagittis.",
  },
  {
    id: 2,
    question: "To insert a JavaScript into an HTML page, which tag is used?",
    answers:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fringilla quam. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eget orci at nunc accumsan eleifend. Phasellus vel elit ut tortor fermentum bibendum. Vivamus fermentum, mauris vel fermentum euismod, orci leo tincidunt justo, sit amet tristique ex quam at arcu. Suspendisse potenti. Nullam nec orci nec libero tristique sagittis.",
  },
  {
    id: 3,
    question:
      "Which attribute needs to be changed to make elements invisible? ",
    answers:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fringilla quam. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eget orci at nunc accumsan eleifend. Phasellus vel elit ut tortor fermentum bibendum. Vivamus fermentum, mauris vel fermentum euismod, orci leo tincidunt justo, sit amet tristique ex quam at arcu. Suspendisse potenti. Nullam nec orci nec libero tristique sagittis.",
  },
];
export default function Accordion() {
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [show, setShow] = useState(null);
  const [multipleShow, setMultipleShow] = useState([]);
  function handleSingleSelection(currentId) {
    setShow(currentId === show ? null : currentId);
  }
  function handleMultipleSelection(currentId) {
    let arrayMultiple = [...multipleShow];
    const findIndex = arrayMultiple.indexOf(currentId);
    if (findIndex === -1) {
      arrayMultiple.push(currentId);
    } else arrayMultiple.splice(findIndex, 1);
    setMultipleShow(arrayMultiple);
  }
  function handleEnableMultipleSelection() {
    setMultipleSelection(!multipleSelection);
    setShow(null);
  }

  return (
    <>
      <button onClick={handleEnableMultipleSelection}>
        Enable Multiple Option
      </button>
      <div>
        <div
          style={{
            height: "80vh",
            width: "50vw",
          }}
        >
          {questions.map((data) => (
            <div>
              <h3>{data.question}</h3>
              <button
                onClick={
                  multipleSelection
                    ? () => handleMultipleSelection(data.id)
                    : () => handleSingleSelection(data.id)
                }
              >
                +
              </button>
              {show === data.id || multipleShow.indexOf(data.id) !== -1 ? (
                <div>{data.answers}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
