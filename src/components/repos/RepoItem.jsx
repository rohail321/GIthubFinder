import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function RepoItem({ repo }) {
  const {
    name,
    description,
    fork,
    html_url,
    open_issues,
    watcher_counts,
    stargazers_count,
  } = repo;
  return (
    <div className='mb-2 rounded-md card bg-gray-800 haver:bg-gray-900 '>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={html_url}>
            <FaLink className='inline mr-1' /> {name}
          </a>
        </h3>
        <p className='mb-3'> {description} </p>
        <div>
          <div className='mr-2 badge badge-info badge-lg'>
            <FaEye className='mr-2' /> {watcher_counts}
          </div>
          <div className='mr-2 badge badge-success badge-lg'>
            <FaStar className='mr-2' /> {stargazers_count}
          </div>
          <div className='mr-2 badge badge-error badge-lg'>
            <FaInfo className='mr-2' /> {open_issues}
          </div>
          <div className='mr-2 badge badge-waning badge-lg'>
            <FaUtensils className='mr-2' /> {fork}
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object,
};
export default RepoItem;
