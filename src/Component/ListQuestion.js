import React from "react";

function ListQuestion(props) {

  const renderOptions = (options, questionIndex) =>
    options.map((option, optionIndex) => (
      <div className="flex items-center mb-4" key={optionIndex}>
        <input
          id={`checkbox-${questionIndex}-${optionIndex}`}
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          id="bordered-checkbox-1"
          htmlFor={`checkbox-${questionIndex}-${optionIndex}`}
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {option}
        </label>
      </div>
    ));

  const renderQuestions = (questions) =>
    questions &&
    questions.map((question, questionIndex) => (
      <fieldset key={questionIndex}>
        <input
          type="text"
          defaultValue={question.title}
          id={`input-${questionIndex}`}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <div className="mx-8">{renderOptions(question.options)}</div>
      </fieldset>
    ));

  return (
    <div className="border-2">
      {renderQuestions(props.botResponse.questions)}
    </div>
  );
}

export default ListQuestion;
