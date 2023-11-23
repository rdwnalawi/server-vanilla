// const http = require('http');
// const PORT = 3000;
 
// const server = http.createServer((req, res) => {
//   res.end('Hello World')
// });
 
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })



// MEMBUAT ROUTE DENGAN URL

// const http = require("http");
// const PORT = 3000;
 
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Dari main route");
//     res.end();
//   }
 
//   if (req.url === "/about") {
//     res.write("About Page");
//     res.end();
//   }
// });
 
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })



// MEMBUAT ROUTE DENGAN HTTP METHOD
// TANYA: 
// 1. gimana cara akses route pake http method di browser? bedanya apa sama yg url di atas kalo keluarnya sama aja?
// 2. yg route & queryparameter pas diakses keluar error (app crashed)

// const http = require("http");
// const PORT = 3000;
 
// const server = http.createServer((req, res) => {
//   if (req.url === "/" && req.method === "GET") {
//     res.write("Dari main route");
//     res.end();
//   }
 
//   if (req.url === "/about" && req.method === "GET") {
//     res.write("About Page");
//     res.end();
//   }
 
//   if (req.url === "/blogs/:id" && req.method === "GET") {
//     const id = req.params.id;
//     res.write(`Blog dengan id ${id}`);
//     res.end();
//   }
 
//   if (req.url === "/blogs" && req.method === "GET") {
//     const id = req.query.id;
//     res.write(`Query: ${req.query} \n Blog dengan id ${id}`);
//     res.end();
//   }
// });
 
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })



// MENGIRIM FILE STATIS DALAM SATU ENDPOINT

// import module http, fs, dan path
// module http buat bikin server
// module fs buat interaksi dengan file, di case ini kita hanya baca filenya
// module path buat membantu kita mengarahkan ke path ke file yang kita mau
 
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
 
// const server = http.createServer((req, res) => {
//    // Cek kalau request buat ke url ("/")
//   if (req.url === '/') {
//     // Tentukan path ke file HTML yang kamu buat, kita taro file html di folder `public`
//     const filePath = path.join(__dirname, 'public', 'index.html');
 
//     // Baca file htmlnya
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         // Handle error kalau file tidak ditemukan
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found');
//       } else {
//         // Kalau file ditemukan, set header response dengan content type html
//         res.writeHead(200, { 'Content-Type': 'text/html' });
 
//         // Kirim file yang diminta
//         res.end(data);
//       }
//     });
//   } else {
//     // Kalau request bukan ke url ("/"), kirimkan response 404, karena yaa gak adaa rutenya
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found');
//   }
// })
 
// const port = 4000; // Set port yang akan dibuka
// server.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });



// MENGIRIM FILE STATIS DALAM BANYAK ENDPOINT
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
 
// const server = http.createServer((req, res) => {
//   // Dengan menggunakan regex kita filter url request tanpa trailing slash '/' dan leading slash '/'
//   const requestedUrl = req.url.replace(/^\/+|\/+$/g, '');
 
//   // Agar request lebih fleksibel kita bisa hilangkan ekstensi .html
//   const cleanUrl = requestedUrl.replace(/\.html$/, '');
 
//   // Define the root directory where your HTML files are stored
//   const rootDirectory = path.join(__dirname, 'public');
 
//   // Buat path lengkap ke file yang diminta
//   const filePath = path.join(rootDirectory, cleanUrl + '.html');
 
//   // Cek dulu apakah file yang diminta ada
//   fs.access(filePath, fs.constants.F_OK, (err) => {
//     if (!err) {
//       // kalau file yang diminta ada, maka baca file tersebut
//       fs.readFile(filePath, (err, data) => {
//         if (err) {
//           // apabila terjadi error dalam membaca file, mengirimkan error
//           res.writeHead(500, { 'Content-Type': 'text/plain' });
//           res.end('500 Internal Server Error');
//         } else {
//           // Tentukan `content Type` berdasarkan ekstensi file
//           const fileExtension = path.extname(filePath);
//           const contentType = {
//             '.html': 'text/html',
//             '.css': 'text/css',
//             '.js': 'application/javascript',
//             // kita bisa tambahkan ekstensi lainnya jika dibutuhkan
//           }[fileExtension] || 'text/plain';
 
//           // Kita perlu untuk memberitahu browser bahwa response yang kita kirimkan adalah file statis
//           res.writeHead(200, { 'Content-Type': contentType });
 
//           // Kirim file yang diminta
//           res.end(data);
//         }
//       });
//     } else {
//       // Ketika file yang diminta tidak ada, kirimkan response 404
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       res.end('404 Not Found');
//     }
//   });
// });
 
// const port = 4000; // Set port yang akan dibuka
// server.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });



// DAY 3

// kalau kita mau pakai module http builtin dari nodejs, kita perlu import terlebih dahulu
const http = require("http");
const PORT = 3000;

// kalau misal kita cuma mau pake beberapa module aja yang ada dari http kita bisa pake
// const { } -> destructuring object
// const { createServer } = require('http')

// const server2 = createServer()

const data_dummy = [
	{
		nama: "udin chaniago",
		asal: "padang",
		hobi: "mancing",
	},
	{
		nama: "abdul somat",
		asal: "kepo bgt lu",
		hobi: "main motor trek",
	},
];

const server = http.createServer(function (request, response) {
	// console.log(request);
	if (request.url === "/") {
		response.write("ini response dari gue");
		response.end();
	}
	if (request.url === "/hello") {
		response.write("hello world");
		response.end();
	}
	if (request.url === "/data") {
		response.writeHead(200, { "Content-Type": "application/json" });
		response.write(JSON.stringify(data_dummy));
		response.end();
	}
});

server.listen(PORT, () => {
	console.log(`server sedang berjalan pada url dan port http://localhost:3000`);
});