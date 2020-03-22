import Airtable from 'airtable'

const Hotel = ({ data }) =>
  <>
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
  </>

Hotel.getInitialProps = async () => {
  const base = new Airtable({ apiKey: process.env.VALPAS_STAYSAFE_AIRTABLE_SECRET }).base(process.env.VALPAS_STAYSAFE_AIRTABLE_BASE);
  const data = await base('Hotels').select({ view: "Grid view" }).all()
  return { data }
}

export default Hotel