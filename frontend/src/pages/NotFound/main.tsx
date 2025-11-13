import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">404</h2>
      <p className="text-xl text-gray-600 mb-8">Página não encontrada</p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
      >
        Voltar para o início
      </button>
    </div>
  );
};

export default NotFoundPage;
