const arr = ["Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ nhật"];
var x = 2;
switch (x) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
        console.log(arr[x - 2]);
        break;
    default:
        console.log("Không phù hợp");
}