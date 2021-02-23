import { useEventsQuery } from "./generated-frontend";

const Messages = () => {
  const { loading, error, data } = useEventsQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <ul>
      {(data.events || []).map((event: any) => (
        <li key={event.message}>Message: {event.message}</li>
      ))}
    </ul>
  );
};

export default Messages;
