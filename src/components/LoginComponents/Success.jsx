import { useAuth } from '../../context/authContext';

const Success = () => {
  const { user, logout, loading } = useAuth();

 

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error)
    }
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="w-full max-w-xs m-auto">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
      >
      <h1 className="text-xl mb-4">Welcome {user.displayName || user.email}</h1>
      <button className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4" onClick={handleLogOut}>LogOut</button>
      </div>
      
    </div>
  );
};

export default Success;
