// import Router from "next/router";
// import { useState } from "react";
import Tilt from "react-parallax-tilt";

// import { Link, Progress } from "common/components";
// import { paths } from "common/consts/paths";
// import { pathsApiV1 } from "common/consts/pathsApiV1";
// import { ResponseError } from "common/types/apiV1";
// import { client } from "common/utils/client";

// import styles from "./styles.module.css";

export type UserCardProps = {
  // user: User;
  user: string;
};

export const UserCard = ({ user }: UserCardProps) => {
  // const [isDeletingUser, setIsDeletingUser] = useState<boolean>(false);

  // const purities = user.batches.map((batch) => batch.purity);
  // const purityBest = purities.length ? `${Prisma.Decimal.max(...purities).toNumber()}%` : "-";
  // const purityAverage = purities.length
  //   ? `${Prisma.Decimal.div(Prisma.Decimal.sum(...purities), purities.length).toFixed(2)}%`
  //   : "-";

  // const handleUserDelete = async (username: string) => {
  //   setIsDeletingUser(true);
  //   await client.delete<null | ResponseError>(pathsApiV1.USERS_DETAILS(username));
  //   setIsDeletingUser(false);

  //   await Router.push(paths.USERS);
  // };

  return (
    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={6} scale={1.04} style={{ minWidth: "360px", maxWidth: "400px" }}>
      <div
        style={{
          backgroundColor: "#64b0ce17",
          margin: "14px",
          padding: "13px",
          borderRadius: "5px",
          boxShadow: "0 4px 8px 0 #3d9cc23b",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          User
          {/* <div>
            <div>
              {user.name} <span style={{ fontStyle: "italic", color: "gray" }}>{user.username}</span>
            </div>
            <div>Current role: {user.role.toLowerCase()}</div>
            <div>
              <li>Cooked {user.batches.length} batches</li>
              <li>Best purity {purityBest}</li>
              <li>Average purity {purityAverage}</li>
            </div>
          </div>
          <img
            src={user.imageUrl ?? "/no-user.jpg"}
            alt={user.username}
            height={90}
            style={{ borderRadius: "4px", marginLeft: "5px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "4px",
          }}
        >
          <Link href={paths.USERS_DETAILS(user.username)} style={{ fontSize: "14px" }}>
            Details
          </Link>
          <div
            style={{
              display: "flex",
            }}
          >
            {isDeletingUser && <Progress />}
            <div
              role="button"
              tabIndex={0}
              onClick={() => void handleUserDelete(user.username)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  void handleUserDelete(user.username);
                }
              }}
              className={styles.deleteButton}
            >
              Delete
            </div>
          </div> */}
        </div>
      </div>
    </Tilt>
  );
};
