import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContactComponent = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/users/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p className="">
            Contact <span className="font-semibold ">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            onChange={onChange}
            name="message"
            id="message"
            rows="2"
            value={message}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding${listing.name}?body=${message}`}
            className="bg-sky-400 text-white uppercase p-3 rounded-lg text-center hover:opacity-90"
          >
            Send message
          </Link>
        </div>
      )}
    </>
  );
};
export default ContactComponent;
