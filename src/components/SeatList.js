const SeatList = ({ seats }) => {
  const seatGroups = {};

  seats.forEach((item) => {
    item.danhSachGhe.forEach((ghe) => {
      if (ghe.daDat) {
        const key = `${ghe.maDon ? `Mã Đơn: ${ghe.maDon}` : "Ghế Demo"} ${
          ghe.khachHang ? `- Khách hàng: ${ghe.khachHang}` : ""
        }  ${ghe.soDT ? `- Số ĐT: ${ghe.soDT}` : ""} `;
        if (key in seatGroups) {
          seatGroups[key].push(ghe);
        } else {
          seatGroups[key] = [ghe];
        }
      }
    });
  });

  return (
    <div id="quanly" style={{ margin: "30px 0", width: "500px" }}>
      <h2>Dành cho quản lý</h2>
      {Object.keys(seatGroups).map((item, index) => (
        <div key={index}>
          <b style={{ fontSize: "14px" }}>{item}</b>
          <div style={{ display: "flex" }}>
            <b>Ghế: </b>
            <ul>
              {seatGroups[item].map((ghe, id) => (
                <li
                  key={id}
                  style={{ display: "inline-block", marginLeft: "20px" }}
                >
                  {ghe.soGhe}
                </li>
              ))}
            </ul>
          </div>
          <hr style={{ margin: "10px 0" }}></hr>
        </div>
      ))}
    </div>
  );
};

export default SeatList;
