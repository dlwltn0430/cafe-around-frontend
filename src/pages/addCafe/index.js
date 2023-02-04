import { useState } from 'react';
import './index.css';
import axios from 'axios';

export default function AddCafe() {
    const [inputs, setInputs] = useState({
        name: '',
        latitude: '',
        longitude: '',
        tag: '',
      });
    
      const { name, latitude, longitude, tag } = inputs; // 비구조화 할당을 통해 값 추출
    
      const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
      };

      const onSubmit = (e) => {
        e.preventDefault()
        console.log (name, latitude, longitude, tag);
        
        let form = new FormData()
        form.append('cafeName', name);
        form.append('latitude', latitude)
        form.append('longitude', longitude)
        axios.post("http://43.201.68.221:8080/api/v1/cafes", form)
            .then(function (response) {
                // response  
            }).catch(function (error) {
                // 오류발생시 실행
            })
      }
      
      const tag_list = ['콘센트가 많은', '테이블이 넓은', '좌석이 많은', '스터디룸이 있는'];

    return (
        <div className='addCafe_container'>
            <form onSubmit={onSubmit}>
                <div className='form_container'>
                    <label htmlFor='form_label'>카페 이름</label>
                    <input name="name" onChange={onChange} value={name} />
                </div>

                <div className='form_container'>
                    <label htmlFor='form_label'>카페 위도</label>
                    <input name="latitude" onChange={onChange} value={latitude} />
                </div>

                <div className='form_container'>
                    <label htmlFor='form_label'>카페 경도</label>
                    <input name="longitude" onChange={onChange} value={longitude} />
                </div>

                <div className='form_container2'>
                    <label className='blue'>태그(키워드)</label>
                    
                    {tag_list.map((tag, idx) => (
                        <div className='checkbox_container' key={idx}>
                            <input type="checkbox" id={tag} /> 
                            <label htmlFor={tag}> {tag} </label>      
                        </div>
                    ))}
                </div>
                
                <div className='addButton'>
                    <button type="submit">등록하기</button>
                </div>
            </form>
        </div>
    );
}