/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";

const APP_ID = "3f839d34";
const API_KEY = "09143c6ff96aa3a228d38aad74712570";
const TYPE = "public";

/**
 * @param { Array } queries Querry array
 * @param { Function } successCallback Success callback function
 */

export async function fetchData(queries, successCallback) {
    const query = queries?.join("&")
        .replace(/,/g, "=")
        .replace(/ /g, "%20")
        .replace(/\+/g, "%28");

    const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        successCallback(data);
    }
}