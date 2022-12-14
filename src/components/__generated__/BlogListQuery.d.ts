/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogListQuery
// ====================================================

// export interface BlogListQuery_allContentfulBlogPost_edges_node_excerpt {
//   excerpt: string | null;
// }

// export interface BlogListQuery_allContentfulPost_edges_node_featuredImage_fluid {
//   base64: string | null;
//   aspectRatio: number;
//   src: string;
//   srcSet: string;
//   sizes: string;
// }

// export interface BlogListQuery_allContentfulPost_edges_node_featuredImage {
//   fluid: BlogListQuery_allContentfulPost_edges_node_featuredImage_fluid | null;
// }

// export interface BlogListQuery_allContentfulPost_edges_node_author_profilePicture_fixed {
//   base64: string | null;
//   width: number;
//   height: number;
//   src: string;
//   srcSet: string;
// }

// export interface BlogListQuery_allContentfulPost_edges_node_author_profilePicture {
//   fixed: BlogListQuery_allContentfulPost_edges_node_author_profilePicture_fixed | null;
// }

// export interface BlogListQuery_allContentfulPost_edges_node_author {
//   name: string | null;
//   profilePicture: BlogListQuery_allContentfulPost_edges_node_author_profilePicture | null;
// }

export interface BlogListQuery_allContentfulPost_edges_node {
  title: string | null;
  slug: string | null;
  //publishedDate: any | null;
  //excerpt: BlogListQuery_allContentfulPost_edges_node_excerpt | null;
  // featuredImage: BlogListQuery_allContentfulPost_edges_node_featuredImage | null;
  // author: BlogListQuery_allContentfulPost_edges_node_author | null;
}

export interface BlogListQuery_allContentfulPost_edges {
  node: BlogListQuery_allContentfulPost_edges_node;
}

export interface BlogListQuery_allContentfulPost {
  edges: BlogListQuery_allContentfulPost_edges[];
}

export interface BlogListQuery {
  allContentfulPost: BlogListQuery_allContentfulPost;
}
