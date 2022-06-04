import "./featuredInfo.css";
import React from 'react';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
        {/* <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,415</span>
        <span className="featuredMoneyRate">
        -11.4 <ArrowDownward  className="featuredIcon negative"/>
        </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">$4,415</span>
        <span className="featuredMoneyRate">
        -1.4 <ArrowDownward className="featuredIcon negative"/>
        </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,225</span>
        <span className="featuredMoneyRate">
        +2.4 <ArrowUpward className="featuredIcon"/>
        </span>
        </div>
      <span className="featuredSub">Compared to last month</span> */}

      <div className="featuredItem">
        <span className="featuredTitle">Available products</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">45</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Customer Queries</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">12</span>
          {/* <span className="featuredMoneyRate">
             <ArrowDownward className="featuredIcon negative" />
          </span> */}
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹ 2000</span>
          <span className="featuredMoneyRate">
            -8.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div >
  );
}