const Contact = ({ contact }) => {
  return (
    <tr key={contact.id}>
      <td>{contact.id}</td>
      <td>{contact?.phone}</td>
      <td>{contact?.country?.name}</td>
    </tr>
  );
};
export default Contact;
