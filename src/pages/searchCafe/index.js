import { useState, useCallback, useId } from 'react';
import './index.css';
import { projects } from './fakeDB.js';

function App() {
  //'콘센트가 많은', '테이블이 넓은', '좌석이 많은', '스터디룸이 있는'
  const [tags, setTags] = useState(['콘센트가 많은']);

  //const id = useId();

  const addTag = useCallback(
    (tag) => () => {
      if (!tags.includes(tag)) {
        return setTags((prevTags) => [...prevTags, tag]);
      }
    },
    [tags]
  );

  const deleteTag = useCallback(
    (tagId) => () => {
      const tagsFiltered = tags.filter((tag) => {
        return tag !== tagId;
      });
      setTags(tagsFiltered);
    },
    [tags]
  );

  const matchTags = (current, target) => {
    return target.every((tag) => current.includes(tag));
  };

  return (
    <div className='tags_container'>
      <h1 className='tag-filter'>카페 조회하기</h1>
      <div>
        {tags.length > 0
          ? tags.map((tag) => {
                return (
                    <button
                      className='close'
                      onClick={deleteTag(tag)}
                    >
                      {tag} &nbsp; x
                    </button>
                  );
            })
          : '원하는 태그를 선택해주세요!'}
      </div>
      {projects
        .filter((proj) => matchTags(proj.tags, tags))
        .map(({ id, title, description, tags }) => {
          return (
            <div className='card'>
              <div>
                <p style={{fontWeight : "800"}}>{title}</p>
                <p>{description}</p>
              </div>
              {tags.map((tag) => {
                return (
                  <button
                    type='button'
                    onClick={addTag(tag)}
                  >
                    #{tag}
                  </button>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}

export default App;