import React from "react";

import { url, headers } from "../service/config";
import axios from "axios";

export default function usePostApi() {
  const [posts, setPosts] = React.useState();

  // fetchPosts, createPost, updatePost, deletePost
  const fetchPosts = async () => {
    try {
      const response = await axios.get(url, { withCredentials: true }, headers);
      const postsInDB = response.data;
      console.log("FETCHING POSTS", response.data, postsInDB);
      setPosts(postsInDB);
      return postsInDB;
    } catch (err) {}
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (post) => {
    console.log("CREATING POST", post);
    try {
      const response = await axios.post(
        url,
        { newPost: post },
        { withCredentials: true },
        headers
      );
      const postsInDB = fetchPosts();
      console.log(postsInDB);
    } catch (err) {}
  };

  const updatePost = async (post) => {
    console.log("UPDATING POST", post);
    try {
      const response = await axios.patch(
        `${url}/update-post`,
        { updatedPost: post },
        { withCredentials: true },
        headers
      );
      const postsInDB = fetchPosts();
      console.log(postsInDB);
    } catch (err) {}
  };

  const deletePost = async (postId) => {
    console.log("DELETNG POST", postId);
    try {
      const response = await axios.post(
        `${url}/delete-post`,
        { postId: postId },
        { withCredentials: true },
        headers
      );
      const postsInDB = fetchPosts();
      console.log(postsInDB);
    } catch (err) {}
  };

  return [posts, fetchPosts, createPost, updatePost, deletePost];
}

// const auth = useContext(AuthContext);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(url, { withCredentials: true }, headers);
//       const finance = response.data;

//       const transactionsOfThisMonth = findTransactionsOfAMonth(
//         finance,
//         selectedDate
//       );

//       const newFinancialState = {
//         allTransactions: transactionsOfThisMonth,
//         generalStructure: finance.generalStructure,
//       };

//       setFinanceState((prevState) => {
//         return {
//           ...prevState,
//           ...newFinancialState,
//         };
//       });
//     } catch (error) {
//       console.error(error);
//       errorHandler({
//         isError: true,
//         message: error.response.data,
//       });
//     }
//   };
