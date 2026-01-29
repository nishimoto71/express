//var express = require('express');
//var router = express.Router();

//router.get('/', function(req, res) {
//  res.send('notes_from_b OK');
//});

//module.exports = router;


var express = require('express');
var router = express.Router();
// レスポンスのデータ（ノート全件）
const responseObjectDataAll = {
//textObject1 : {
//id: 1,
//title: 'ノート１のタイトルです',
//subTitle: 'ノート１のサブタイトルです',
//bodyText: 'ノート１の本文です'
//},


//              { name: 'Yasushi', mail: 'osonoi@cu', tel: '1111' },
//              { name: 'Koh', mail: 'kojima@cu', tel: '2222' },
//              { name: 'Alice', mail: 'alice@example.com', tel: '3333' },
//              { name: 'Bob', mail: 'bob@example.com', tel: '4444' },
//              { name: 'Charlie', mail: 'charlie@example.com', tel: '5555' },
//              { name: 'David', mail: 'david@example.com', tel: '6666' },
//              { name: 'Eve', mail: 'eve@example.com', tel: '7777' },
//              { name: 'Frank', mail: 'frank@example.com', tel: '8888' },
//              { name: 'Grace', mail: 'grace@example.com', tel: '9999' },
//              { name: 'Henry', mail: 'henry@example.com', tel: '0000' } //,  

_id1 : {
name: 'Yasushi', mail: 'osonoi@cu', tel: '1111'
},
_id2 : {
name: 'Koh', mail: 'kojima@cu', tel: '2222'
},
id3 : {
name: 'Alice', mail: 'alice@example.com', tel: '3333'
},
id4 : {
name: 'Bob', mail: 'bob@example.com', tel: '4444'
},
id5 : {
name: 'Charlie', mail: 'charlie@example.com', tel: '5555'
},
id6 : {
name: 'David', mail: 'david@example.com', tel: '6666'
},
id7 : {
name: 'Eve', mail: 'eve@example.com', tel: '7777'
},
id8 : {
name: 'Frank', mail: 'frank@example.com', tel: '8888'
},
id9 : {
name: 'Grace', mail: 'grace@example.com', tel: '9999'
},
id10 : {
name: 'Henry', mail: 'henry@example.com', tel: '0000'
},
//textObject2 : {
//id: 2,
//title: 'ノート２のタイトルです',
//subTitle: 'ノート２のサブタイトルです',
//bodyText: 'ノート２の本文です'
//},
};
/**
* メモを全件取得するAPI
* @returns {Object[]} data
* @returns {number} data.id - ID
* @returns {string} data.title - タイトル
* @returns {string} data.text - 内容
*/
router.get('/', function (req, res, next) {
// 全件取得して返す
res.json(responseObjectDataAll);
})
module.exports = router;