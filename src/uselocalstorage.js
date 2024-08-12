import { useEffect, useState } from "react";

export function useLocalstorage(initialstorage,key){

    const [watched, setWatched] = useState(function (){
        const storedvalue=localStorage.getItem(key);
        return JSON.parse(storedvalue);
      });
      useEffect(function(){
        localStorage.setItem(key,JSON.stringify(watched))
      },[watched,key]);
      return [watched,setWatched];
}