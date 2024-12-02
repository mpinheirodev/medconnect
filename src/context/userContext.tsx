import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { buscarUsuarioPorId } from '@/service/agendamento'

export interface User {
    id: number;
    nome: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const listarUsuarios = async () => {
        try {
          const usuarioId = localStorage.getItem("idUsuario");
          if (usuarioId) {
            await buscarUsuarioPorId(usuarioId)
              .then(response => {
                setUsuario(response.data);
                setNome(response.data.nome)
                setEmail(response.data.email)
                setTelefone(response.data.telefone)
                localStorage.setItem("nome", response.data.nome)
              })
          } 
        } catch(error) {
            console.error('Erro ao buscar dados do usuário', error);
            setUser(null);
        } finally {
            setLoading(false);
          }
        };

        listarUsuarios();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

function setUsuario(data: any) {
  throw new Error('Function not implemented.');
}

function setNome(nome: any) {
  throw new Error('Function not implemented.');
}

function setEmail(email: any) {
  throw new Error('Function not implemented.');
}

function setTelefone(telefone: any) {
  throw new Error('Function not implemented.');
}

function fetchUser() {
  throw new Error('Function not implemented.');
}

