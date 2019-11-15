import React, {Component} from 'react';
import './style.css'

class Detail extends Component {
    render() {
        return (
            <div className="detail">
                <div className="detail__header">
                    <span>团购详情</span>
                    <i className="detail__headerIcon"></i>
                </div>
                <table
                    className="detail__table">
                    <tbody>
                        <tr className="detail__row" aria-colspan="3">
                            <th className="detail__category">饮品</th>
                        </tr>
                        <tr className="detail__row">
                            <td>百果香（冷饮）</td>
                            <td className="detail__td--alignRight">
                                1扎
                            </td>
                            <td className="detail__td--alignRight">
                                48元
                            </td>
                        </tr>
                        <tr className="detail__row">
                            <td></td>
                            <td className="detail__td--price">
                                最高价值
                                <br/>
                                <strong className="detail__td--priceNew">
                                    团购价
                                </strong>
                            </td>
                            <td className="detail__td--price">
                                48元
                                <br/>
                                <strong className="detail__td--priceNew">
                                    19.9元
                                </strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="detail__remark">

                </div>
                <div className="detail__more"></div>
            </div>
        );
    }
}

export default Detail;
