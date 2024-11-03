import RoadsTable from "@renderer/components/table"

function HomePage(): JSX.Element {
  const some = [
    {
      name: "Tom",
      locations: "1",
      createdAt: "1"
    },
    {
      name: "Dick",
      locations: "2",
      createdAt: "2"
    },
    {
      name: "Harry",
      locations: "3",
      createdAt: "3"
    }
  ]
  // TODO: add connection to backend

  return (
    <>
      {/* TODO: set header component here */}
      <RoadsTable data={some} />
    </>
  )
}

export default HomePage
