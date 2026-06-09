import Container from "../components/container";
import DocumentsList from "../core-components/documents-list";

export default function DocumentsPage() {
  return(
    <Container as="article" className="space-y-3 py-3">
      <DocumentsList />
    </Container>
  )
}