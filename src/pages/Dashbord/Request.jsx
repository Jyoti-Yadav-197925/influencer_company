import CardComponent from "../../components/Request/CardComponent";
import ListButton from "../../components/Request/ListButton";

function Request() {
  return (
    <div className="flex flex-col items-start min-h-screen p-5">
      <ListButton />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}


export default Request;
