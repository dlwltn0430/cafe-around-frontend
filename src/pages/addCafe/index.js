import { useState } from 'react';
import './index.css';
import axios from 'axios';

export default function AddCafe() {
    const headers = {
        "Content-type": "application/json;charset=UTF-8"
    }

    const [inputs, setInputs] = useState({
        cafeName: '',
        latitude: '',
        longitude: '',
        tag: '',
        cateName: '',
        university: '',
        price: '',
        openingHour: '',
        address: ''
      });
    
      const { cafeName, latitude, longitude, tag, cateName, university, price, openingHour, address } = inputs; // 비구조화 할당을 통해 값 추출
    
      const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
      };

      const onSubmit = (e) => {
        e.preventDefault()
        // console.log (name, latitude, longitude, tag);
        
        let form = new FormData()
        console.log(inputs);
        form.append('cafeName', cafeName)
        form.append('latitude', latitude)
        form.append('longitude', longitude)

        axios.post("/api/v1/cafes", form, {headers})
            .then(function (response) {
                // response  
                console.log("성공");
                console.log(response);
            }).catch(function (error) {
                // 오류발생시 실행
                console.log(error);
                console.log("실패");
            })
      }

      const addCate = (e) => {
        e.preventDefault()
        axios.post("/api/v1/categorys",
            {
                name: cateName
            },
            {headers})
        .then(function(response) {
            console.log("카테고리 등록 성공")
            console.log(response)
        }).catch(function(error) {
            console.log(error);
            console.log("카테고리 등록 실패")
        })
      }
      
      axios.get("http://43.201.68.221:8080/api/v1/categorys")
        .then(function(response) {
            console.log(response.data)
        }) .catch(function(error) {
            console.log(error)
        })
    
      const tag_list = ['콘센트가 많은', '테이블이 넓은', '좌석이 많은', '스터디룸이 있는'];

    return (
        <div className='addCafe_container'>
            <form onSubmit={onSubmit}>
                <div className='form_container'>
                    <div className='label_container'>
                        <label htmlFor='form_label'>카페 이름</label>
                    </div>
                    <input name="cafeName" onChange={onChange} value={cafeName} />
                </div>

                <div className='form_container'>
                    <div className='label_container'>
                        <label htmlFor='form_label'>카페 위도</label>
                    </div>
                    <input name="latitude" onChange={onChange} value={latitude} />
                </div>

                <div className='form_container'>
                    <div className='label_container'>
                        <label htmlFor='form_label'>카페 경도</label>
                    </div>
                    <input name="longitude" onChange={onChange} value={longitude} />
                </div>

                <div className='form_container2'>
                    <div className='label_container'>
                        <label htmlFor='form_label'>태그(키워드)</label>
                    </div>
                    
                    <div className='checkbox_container'>
                    {tag_list.map((tag, idx) => (
                        <div className='checkbox_container2' key={idx}>
                            <input type="checkbox" id={tag} /> 
                            <label htmlFor={tag}> {tag} </label>     
                        </div>
                    ))}
                    </div>
                </div>

                <div className='form_container'>
                    <div className='label_container'>
                        <label htmlFor='form_label'>태그 추가하기</label>
                    </div>
                    <input name="cateName" onChange={onChange} value={cateName} 
                            style={{width: '200px'}}/>
                    <button className='addCategory_btn'onClick={addCate}>추가</button>
                </div>

                <div className='form_container'>
                    <div className='label_container'>
                        <label htmlFor='form_label'>근처 대학교</label>
                    </div>
                    <select name="university" onChange={onChange} value={university}>
                        <option value="부경대">부경대</option>
                        <option value="부산대">부산대</option>
                        <option value="부산교대">부산교대</option>
                        <option value="한국해양대">한국해양대</option>
                        <option value="경성대">경성대</option>
                        <option value="고신대">고신대</option>
                        <option value="동명대">동명대</option>
                        <option value="동서대">동서대</option>
                        <option value="동아대">동아대</option>
                        <option value="동의대">동의대</option>
                        <option value="부산외대">부산외대</option>
                        <option value="인제대">인제대</option>
                    </select>
                </div>

                <div className='form_container'>
                    <div className='label_container'>
                        <label htmlFor='form_label'>가격</label>
                    </div>
                    <input name="price" onChange={onChange} value={price} />
                </div>

                <div className='form_container'>
                    <div className='label_container'>
                        <label htmlFor='form_label'>영업 시간</label>
                    </div>
                    <input name="openingHour" onChange={onChange} value={openingHour} />
                </div>

                <div className='form_container'>
                    <div className='label_container'>
                        <label htmlFor='form_label'>주소</label>
                    </div>
                    <input name="address" onChange={onChange} value={address} /> 
                </div>

                <div className='addButton'>
                    <button type="submit">등록하기</button>
                </div>
            </form>
        </div>
    );
}