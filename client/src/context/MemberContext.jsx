import { createContext, useContext, useState } from "react";
import {createMemberRequest, getMembersRequest} from '../api/members';

const MemberContext = createContext();

export const useMembers = () => {
  const context = useContext(MemberContext);

  if (!context) {
    throw new Error('useMembers must be used within a MemberProvider');
  }

  return context;

}

export function MemberProvider({children}) {

  const [members, setMembers] = useState([]);

  const getMembers = async () => {
    try {
      const res = await getMembersRequest();
      setMembers(res.data);
    } catch (error) {
      console.error(error);
    }
    
  }

  const createMember = async (member) => {
    const res = await createMemberRequest(member)
    console.log(res)
  }

  return (
    <MemberContext.Provider 
    value ={{
      members,
      createMember,
      getMembers
    }}>
      {children}
    </MemberContext.Provider>
  )
}