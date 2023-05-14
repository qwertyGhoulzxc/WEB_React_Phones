import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData, Payload } from './types/data.interface';
import { useActions } from "@/app/hooks/useActions";



export const dataApi = createApi({
    reducerPath:'api/users',
    baseQuery:fetchBaseQuery({baseUrl:process.env.API_URL,credentials:'include',prepareHeaders:(headers)=>{
    const token = localStorage.getItem('token');
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }}),
    endpoints:(build)=>({
        // getUsers:build.query<IUser[],string>({
        //     query: ()=>'/users',
        // }),
        RegUser: build.mutation<IData, Payload>({
            query: (payload) => ({
              url: '/registration',
              method: 'POST',
              body: payload,
            }),
            
            transformResponse:(response:IData)=>{
                console.log(response)
            const {accessToken} = response
            localStorage.setItem('token',accessToken);
            return response
            },
            
          }), 

          LoginUser: build.mutation<IData, Payload>({
            query: (payload) => ({
              url: '/login',
              method: 'POST',
              body: payload,
            }),
            transformResponse:(response:IData)=>{
                console.log(response)
            const {accessToken} = response
            localStorage.setItem('token',accessToken);
            return response
            }
          }), 

    }),

});

export const {useRegUserMutation, useLoginUserMutation} = dataApi
