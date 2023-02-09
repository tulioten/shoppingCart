import axios from "axios";

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/e2d73af73e7b4cd487b126f6f199fafa/',
  timeout: 10000,
});


// Go to crudcrud.com and replace this baseURL link
// for the one you just got,to test this App.