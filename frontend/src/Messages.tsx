import { useQuery, gql } from "@apollo/client";

const EVENTS = gql`
  query Events {
    events {
      message
    }
  }
`;

const Messages = () => {
  const { loading, error, data } = useQuery<{
    events: Array<{ message: string }>;
  }>(EVENTS);

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
      {data.events.map((event: any) => (
        <li key={event.message}>Message: {event.message}</li>
      ))}
    </ul>
  );
};

export default Messages;
