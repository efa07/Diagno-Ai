export default function PatientHome(){
    return (
        <h1>hello</h1>
    )
}

// "use client";
// import { useSession } from "better-auth/react";

// export default function Dashboard() {
//   const { data: session, isLoading } = useSession();

//   if (isLoading) return <p>Loading...</p>;
//   if (!session) return <p>You are not logged in</p>;

//   return (
//     <div>
//       <h1>Welcome, {session.user.name}</h1>
//       <p>Role: {session.user.role}</p>
//     </div>
//   );
// }
