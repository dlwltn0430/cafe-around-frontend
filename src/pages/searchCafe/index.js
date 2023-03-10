import { useState, useCallback, useId } from 'react';
import './index.css';
import { projects } from './fakeDB.js';
import { Link } from "react-router-dom";
import styled from 'styled-components';

function SearchCafe() {
  //'콘센트가 많은', '테이블이 넓은', '좌석이 많은', '스터디룸이 있는'
  const [tags, setTags] = useState(['콘센트가 많은']);
  const [univ, setUniv] = useState(['부산대']);

  //const id = useId();

  const addTag = useCallback(
    (tag) => () => {
      console.log(tags);
      console.log(tag);
      if (!tags.includes(tag)) {
        return setTags((prevTags) => [...prevTags, tag]);
      }
    },
    [tags]
  );

  // 수정
  const addUniv = useCallback(
    (u) => () => {
      console.log(univ);
      console.log(u);
      if (!univ.includes(u)) {
        return setUniv((prevUniv) => [...prevUniv, u]);
      }
    },
    [univ]
  );


  const deleteTag = useCallback(
    (tagId) => () => {
      console.log(tagId); // 테이블이 넓은
      console.log(tags); // ['테이블이 넓은']
      const tagsFiltered = tags.filter((tag) => {
        return tag !== tagId;
        
      });
      console.log(tagsFiltered); // []
      setTags(tagsFiltered);
    },
    [tags]
  );

  console.log(tags);
  console.log(univ);
  
  // 수정
  const deleteUniv = useCallback(
    (univId) => () => {
      console.log(univId); // 부산대
      console.log(univ); // 부산대
      const univFiltered = univ.filter((u) => {
        return u !== univId; 
      });
      /*const univFiltered = univ !== univId;*/
      console.log(univFiltered);
      setUniv(univFiltered);
    },
    [univ]
  );

  
  const matchTags = (current, target) => {
    return target.every((tag) => current.includes(tag));
  };

  //수정
  const matchUniv = (current, target) => {
    return target.every((univ) => current.includes(univ));
  };


  return (
    <div className='tags_container'>
      <h2 className='tag-filter'>카페 조회하기</h2>
      <div>
        {tags.length > 0
          ? tags.map((tag) => {
            
                return (
                    <Tags id={tag}
                      className='close'
                      onClick={deleteTag(tag)}
                    >
                      {tag} &nbsp; x
                    </Tags>
                  );
            })
          : '원하는 태그를 선택해주세요!'}
          
      </div>
    
      <div>
      {univ.length > 0
          ? univ.map((u) => {
            
                return (
                    <UnivTag id={u}
                      className='close-1'
                      onClick={deleteUniv(u)}
                    >
                      {u} &nbsp; x
                    </UnivTag>
                  );
            })
          : '원하는 대학교를 선택해주세요!'}
      </div>

        {projects
          .filter((proj) => matchUniv(proj.univ, univ))
          .filter((proj) => matchTags(proj.tags, tags))
          .map(({ id, title, address, tags, latitude, longitude, univ, price, openingHour }) => {
            return (
              <div className='card' key={id}>

              {/*<Link to = "/detail" state={{ latitude: latitude, longitude: longitude }} style={{textDecoration: 'none', color: "#000", flex: 1}}>
                <div>
                  <p style={{fontWeight : "800"}}>{title}</p>
                  <p>{description}</p>
                </div>
            </Link>*/}

                <div>
                  <p style={{fontWeight : "800"}}>{title}</p>
                  <p>{address}</p>
                </div>
              <div style={{height: 'inherit'}}>
              {tags.map((tag) => {
                return (
                  <Tags id={tag}
                    onClick={addTag(tag)}
                  >
                    #{tag}
                  </Tags>
                );
              })}
              </div>

              <div style={{height: 'inherit'}}>
                  <UnivTag id={univ}
                    onClick={addUniv(univ)}>
                    {univ}
                  </UnivTag>

                  
                
              </div>

              <div className='detail_link'>
                <Link to="/detail" 
                      state={{ title: title, address: address, tags: tags, latitude: latitude, longitude: longitude, univ: univ, price: price, openingHour: openingHour }} 
                      style={{textDecoration: 'none', color: "#000", flex: 1}}>
                상세보기
                </Link>
              </div>

            
              </div>
            );
          })}
    </div>
  );
}

const Tags = styled.button`
  font-family: "NanumSquareRound";
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 0.875rem;
  margin-bottom: 1rem;
  color: #6e5eff; 
  font-weight: 500;
  font-size: 1rem;
  background: #f1f3f5;
  border-radius: 1rem;
  text-decoration: none;
  border: 0;
`;

const UnivTag = styled.button`
  font-family: "NanumSquareRound";  
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 0.875rem;
  margin-bottom: 1rem;
  color: #f1f3f5; 
  font-weight: 500;
  font-size: 1rem;
  background: #6e5eff;
  border-radius: 1rem;
  text-decoration: none;
  border: 0;
`;

export default SearchCafe;