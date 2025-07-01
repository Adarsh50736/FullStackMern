import AddClientForm from '../components/admin/AddClientForm';
import AddProjectForm from '../components/admin/AddProjectForm';
import ContactList from '../components/admin/ContactList';
import SubscriberList from '../components/admin/SubscriberList';

const AdminPanel = () => {
  return (
    <div className='bg-blue-400'>
      <h1>Admin Panel</h1>
      <AddProjectForm />
      <div className='my-2'><AddClientForm /></div>
      <ContactList />
      <div className='my-2'><SubscriberList /></div>
    </div>
  );
};

export default AdminPanel;
