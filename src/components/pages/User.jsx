import React, { useContext, useEffect } from "react";
import GithubContext from "../../context/GithubContext";
import { useParams } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import RepoList from "../repos/RepoList";

function User() {
  const { searchUser, user, loading, userRepo, repos } =
    useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    searchUser(params.login);
    userRepo(params.login);
  }, []);
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    repos_url,
  } = user;
  return loading ? (
    <h3>Loading......</h3>
  ) : (
    <>
      <div>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back to search
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8  md:gap-8'>
        <div className='custom-card-image mb-6 md:mb-0 '>
          <div className='rounded-lg shadow-xl card image-full'>
            <figure>
              <img src={avatar_url} />
            </figure>
            <div className='card-body justify-end' style={{ color: "white" }}>
              <h2 className='card-title mb-10'>{name}</h2>
              <p>{login}</p>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='mb-6'>
            <h1 className='text-3xl card-title'>
              {name}
              <div className='ml-2 mr-1 badge badge-success'>
                {type}
                {hireable && (
                  <div className='mx-1 badge badge-info'> Hireable </div>
                )}
              </div>
            </h1>
            <p> {bio} </p>
            <div className='mt-4 card-actions'>
              <a
                href={html_url}
                target='_blank'
                rel="'noreferrer"
                className='bt btn-outline'
              >
                Visit Github
              </a>
            </div>
          </div>
          <div className='w-full rounded-lg shadow-mg bg-base-lg stats'>
            {location && (
              <div className='stats'>
                <div className='stat-title text-md'>Location</div>
                <div className='text-lg stat-value'>{location}</div>
              </div>
            )}
            {blog && (
              <div className='stats'>
                <div className='stat-title text-md'>Website</div>
                <div className='text-lg stat-value'>
                  <a href={`https://${blog}`} target='_blank' rel='noreferrer'>
                    {blog}
                  </a>
                </div>
              </div>
            )}
            {twitter_username && (
              <div className='stats'>
                <div className='stat-title text-md'>Twitter</div>
                <div className='text-lg stat-value'>
                  <a
                    href={`https://wwww.twitter.com/${twitter_username}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='stats'>
          <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
            <div className='stats-figure text-secondary'>
              <FaUser className='text-3xl md:text-5xl' />
            </div>
            <div className='stats-title pr-5 '>Followers</div>
            <div className='stats-value pr-5 text-3xl md:text-4xl '>
              {followers}
            </div>
          </div>
        </div>
        <div className='stats'>
          <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
            <div className='stats-figure text-secondary'>
              <FaUserFriends className='text-3xl md:text-5xl' />
            </div>
            <div className='stats-title pr-5 '>Following</div>
            <div className='stats-value pr-5 text-3xl md:text-4xl '>
              {following}
            </div>
          </div>
        </div>
        <div className='stats'>
          <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
            <div className='stats-figure text-secondary'>
              <FaCodepen className='text-3xl md:text-5xl' />
            </div>
            <div className='stats-title pr-5 '>Repo</div>
            <div className='stats-value pr-5 text-3xl md:text-4xl '>
              {public_repos}
            </div>
          </div>
        </div>
        <div className='stats'>
          <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
            <div className='stats-figure text-secondary'>
              <FaStore className='text-3xl md:text-5xl' />
            </div>
            <div className='stats-title pr-5 '>Gists</div>
            <div className='stats-value pr-5 text-3xl md:text-4xl '>
              {public_gists}
            </div>
          </div>
        </div>
      </div>
      <RepoList repos={repos} />
    </>
  );
}

export default User;
