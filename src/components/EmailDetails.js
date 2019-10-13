import React from "react";

const EmailDetails = ({ email, onDelete }) => {
  if (!email) {
    return <div className="email-content">Hey empty email</div>;
  }

  const date = `${email.time} · ${email.time}`;

  const getDeleteButton = () => {
    if (email.tag !== "deleted") {
      return (
        <span
          onClick={() => {
            onDelete(email.id);
          }}
          className="delete-btn fa fa-trash-o"
        ></span>
      );
    }
    return undefined;
  };

  return (
	<div className="email-content">
		{email && email.messages && email.messages.map(content => {
			return (
				<div>
					<div className="email-content__header">
						<h3 className="email-content__subject">{email.subject}</h3>
						{getDeleteButton()}
						<div className="email-content__time">{ `${content.time} · ${content.time}`}</div>
						<div className="email-content__from">{content.creator.username}</div>
					</div>
					<div className="email-content__message">{content.body}</div>
				</div>
			);
		})}
	</div>
);
};

export default EmailDetails;
