import Contact from "./Contact";

const ContactsTable = ({ filteredContacts }) => {
  return (
    <table className="table table-striped ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Country</th>
        </tr>
      </thead>
      <tbody>
        {filteredContacts?.map((contact) => (
          <Contact contact={contact} />
        ))}
      </tbody>
    </table>
  );
};
export default ContactsTable;
