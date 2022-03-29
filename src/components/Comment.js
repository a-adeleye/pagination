export default function Comment({ name, body, id }) {
  return (
    <div className="flex flex-col gap-1 py-4 border-blue-600 border-b">
      <div className="flex gap-4 font-bold items-center">
        <h3 className="bg-blue-600 text-white p-2">{id}</h3>
        <h3>{name}</h3>
      </div>
      <p>{body}</p>
    </div>
  );
}
