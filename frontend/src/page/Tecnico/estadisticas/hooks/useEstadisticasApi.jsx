import { useState, useEffect} from 'react';
import axios from 'axios';

const useEstadisticasApi = (API_URL) => {

  const [datos, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [API_URL]);

  return { datos, isLoading, error };
};

export default useEstadisticasApi;