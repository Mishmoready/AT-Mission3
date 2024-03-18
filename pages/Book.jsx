import { useParams } from "react-router-dom";

export default function BookId() {
  const params = useParams();
  return <h1>You are about to access book: {params.bookID}</h1>;
}
