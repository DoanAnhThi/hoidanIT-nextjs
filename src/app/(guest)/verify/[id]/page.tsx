import Verify from "@/components/auth/verify";

const VerifiPage = ( {params} : {params:{id:string}} ) => {
  const {id} = params;
  return (
    <>
      <Verify
      id = {id}
      />
    </>
  );
}

export default VerifiPage;