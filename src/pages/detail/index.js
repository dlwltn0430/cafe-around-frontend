import { useLocation } from "react-router-dom";
import Map from '../../components/map'
import './index.css'
import styled from 'styled-components';

const Detail = ({ props }) => {
    let { state } = useLocation();

    return (
        <div className="detail_container">
            <div className="cafe_detail">

                <div className="cafeName">
                    <label htmlFor="detail_label">카페명</label>
                    {state.title}
                </div>

                <div className="tags">
                    <label htmlFor="detail_label">키워드</label>
                    {state.tags.map((tag) => {
                        return (
                            <div className="tag">
                                {tag}
                            </div>
                        );
                    })}
                </div>

                <div className="university">
                    <label htmlFor="detail_label">근처 대학교</label> 
                    <div className="univTag">{state.univ}</div>
                </div>

                <div className="price">
                    <label htmlFor="detail_label">가격</label>
                    {state.price} ~
                </div>

                <div className="openingHour">
                    <label htmlFor="detail_label">영업 시간</label>
                    {state.openingHour}
                </div>

                <div className="address">
                <label htmlFor="detail_label">주소</label>
                <div className='address_container'>{state.address}</div>
                </div>

                <div className="map_container">
                    <Map />
                </div>
            </div>
        </div>
    );
};

const Tags = styled.button`
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

export default Detail;

