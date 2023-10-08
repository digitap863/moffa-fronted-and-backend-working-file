const express = require("express");
const { verifyToken } = require("../middleware/tokenVerification");
const fileUploade = require("express-fileupload");
const router = express.Router();
const {
  verifyAdmin,
  viewAllUser,
  viewAllWholsalers,
  viewAllWholesalersRequest,
  verifyWholesalers,
  addProducts,
  deleteProduct,
  makeWholesaler,
  makeUser,
  MakeAdmin,
  AllAdmins,
  deleteAdmin,
  addBanner,
  viewAllBanner,
  deleteBanner,
  viewAllProducts,
  getAllOrders,
  getSingleProduct,
  deleteuser,
  getSingleOrder,
  EditProducts,
  AddDealOfTheDay,
  viewAllDealofTheDay,
  DeleteDealOfTheDay,
  TotalRevanue,
  MonthlySalses,
  ViewBottomBanner,
  EditBottomBanner,
  getAllOutStock,
  UpdateStock,
  DeleteStock,
  DispatchOrder,
  viewALLDispatchOrders,
  updatedWallet,
  ChangeOrderStatus,
  yesterdayOrders,
  ViewAllInformation,
  MonthlyWaysReportApi,
  EditOrderAddress,
  ImageUploading,
  AddBannerImage,
  ManuallyOrder,
  UniqueOrderTake
} = require("../controllers/superAdminControllers");
const multer = require("multer");
let upload = multer({
  limits: 1024 * 1024 * 5,
  fileFilter: function (req, file, done) {
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      done(null, true);
    } else {
      done("file type is not supported", false);
    }
  },
});

//super Admin login function
router.route("/login").post(verifyAdmin);
//view all users
router.route("/viewAlluser").get(verifyToken, viewAllUser);
//deleter user routes
router.route("/delete-user/:id").post(verifyToken, deleteuser);
//make wholesaler wholesalers
router.route("/wholesaler/:id").post(verifyToken, makeWholesaler);
//view all wholesalers
router.route("/all-wholesaler").get(verifyToken, viewAllWholsalers);
//convent wholesaler to user function
router.route("/delete-wholesaler/:id").delete(verifyToken,makeUser);
//make admin
router.route("/add-admin").post(verifyToken, MakeAdmin);
//view all admin
router.route("/view-all-admin").get(verifyToken, AllAdmins);
//delete admin routes
router.route("/delete-admin").post(verifyToken, deleteAdmin);
//banner add images
router.route("/add-banner-image").post(verifyToken, addBanner);
//view all banner images
router.route("/view-all-banner").get(viewAllBanner);
//delete banner roues
router.route("/delete-banner").post(verifyToken, deleteBanner);
//add products routes function
router.route("/addProduct").post(verifyToken, addProducts);
//get all products
router.route("/view-all-products").get(viewAllProducts);
//view all orders
router.route("/view-all-orders").get(verifyToken, getAllOrders);
//view single order deatails
router.route("/view-single-order/:id").get(verifyToken, getSingleOrder);
//view single products routes
router.route("/get-sinlge-Produt/:id").get(getSingleProduct);
//edit produts routs
router.route("/Edit-Produts/:id").post(EditProducts);
//delete products
router.route("/delete-produt/:id").post(deleteProduct);
//get deal of the day
router.route("/add-deal-day").post(verifyToken, AddDealOfTheDay);
//view All wholesaler
router.route("/viewAllWholesalers").get(viewAllWholsalers);
//view all wholesaler request
router.route("/viewAllWholesalersRequset").get(viewAllWholesalersRequest);
//verify wholesalers function
router.route("/viewAllWholesalersRequset/verify/:id").post(verifyWholesalers);
//delete products from product
router.route("/deleteProduct/:Id").post(verifyToken, deleteProduct);
//view all Deal of the Days
router.route("/view-all-deals-day").get(verifyToken, viewAllDealofTheDay);
//delete Deal of the Day Produts
router.route("/delete-Deal-Day-Offer/:id").delete(DeleteDealOfTheDay);
//get total revenue
router.route("/view-total-amount").get(verifyToken, TotalRevanue);
//get monthly sales reports
router.route("/get-mothly-sales").get(verifyToken, MonthlySalses);
//get all bottom banner images
router.route("/view-all-bottom-banner").get(verifyToken, ViewBottomBanner);
//edit bottom banner image
router.route("/edit-bottom-banner").post(verifyToken, EditBottomBanner);
//view all stock
router.route("/view-outof-stock").get(verifyToken, getAllOutStock);
//update stock routes
router.route("/update-outof-stock").patch(verifyToken, UpdateStock);
//delete stock updation
router.route("/delete-outof-stock").post(verifyToken, DeleteStock);
//order dispatch function
router.route("/dispatch-order").post(verifyToken, DispatchOrder);
//view dispatch orders
router.route("/view-dispatch-orders").get(verifyToken, viewALLDispatchOrders);
//change wholsaler wallet amount
router.route("/update-wholsaler-wallet").post(updatedWallet);
//change order status
router.route("/Change-order-status").post(verifyToken, ChangeOrderStatus);
//yesterday order view
router.route("/Yesterday-orders").post(verifyToken, yesterdayOrders);
//view wallet information
router.route("/view-all-wallet-info").get(verifyToken, ViewAllInformation);
//monthly ways report downloading api
router
  .route("/view-all-monthlyways-report")
  .post(verifyToken, MonthlyWaysReportApi); 
//order editing
router.route("/edit-order-address").post(verifyToken, EditOrderAddress);
//image uploading
router.route("/image-uploading").post( ImageUploading);
router.route("/upload-banner-image").post( AddBannerImage);
router.route("/check-order-details").post( verifyToken,UniqueOrderTake);
router.route("/order-confirm-admin").post( verifyToken,ManuallyOrder);

 
module.exports = router;
