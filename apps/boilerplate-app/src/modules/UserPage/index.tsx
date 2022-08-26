// import { Table } from "common/components";

export const UserPage = () => {
  // if (user === null) {
  //   return (
  //     <div>
  //       Username <span style={{ fontStyle: 'italic', color: 'gray' }}>{queryParamUsername}</span> does not exist.
  //     </div>
  //   );
  // }

  return (
    <div>
      {/* <h3>👤 User - {user.name}</h3> */}
      <h3>👤 User</h3>
      {/* <Table
        trHead={Object.keys(Prisma.UserScalarFieldEnum).map((columnName) => (
          <th key={columnName}>{columnName}</th>
        ))}
        trData={[
          <>
            <td>{user.id}</td>
            <td>{new Date(user.createdAt).toDateString()}</td>
            <td>{new Date(user.updatedAt).toDateString()}</td>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "170px" }}>
              {user.imageUrl}
            </td>
            <td>{user.role}</td>
          </>,
        ]}
      />
      <h4>Batches Cooked</h4>
      <Table
        trHead={Object.keys(Prisma.BatchScalarFieldEnum).map((columnName) => {
          let unit = "";
          switch (columnName as Prisma.BatchScalarFieldEnum) {
            case "purity":
              unit = "[%]";
              break;
            case "weight":
              unit = "[kg]";
              break;
          }
          return (
            <th key={columnName}>
              {columnName}
              {unit}
            </th>
          );
        })}
        trData={user.batches.map((batch) => (
          <>
            <td>{batch.id}</td>
            <td>{new Date(batch.createdAt).toDateString()}</td>
            <td>{new Date(batch.updatedAt).toDateString()}</td>
            <td>{batch.title}</td>
            <td>{batch.description ?? "-"}</td>
            <td>{new Prisma.Decimal(batch.purity).toNumber()}</td>
            <td>{new Prisma.Decimal(batch.weight).toNumber()}</td>
            <td>{batch.supplierId}</td>
          </>
        ))}
      /> */}
    </div>
  );
};
