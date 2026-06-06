import { AsyncHandler } from "../middleware/asyncHandler.js";
import bcrypt from 'bcryptjs';
import { userModel } from "../model/user.model.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";

export const userRegister = AsyncHandler(async(req,res)=>{
    const data = req.validated.body;
    const isExist = await userModel.findOne({email:data.email,role:'user'});
    if(isExist){
         return res.status(409).json({
            message:"Email Id already exist.",
            success:false
        });
    }
    const hashPassword = await bcrypt.hash(data.password,10);
    const saveUser = await userModel.create({
        ...data,password:hashPassword
    });

    const refreshToken = generateRefreshToken({id:saveUser._id,role:'user'});
    const accessToken = generateAccessToken({id:saveUser._id,role:'user'});
    saveUser.refreshToken = refreshToken;
    await saveUser.save();

    return res.status(201).json({
        message:"Registered successfully.",
        success:true,
        accessToken,
        refreshToken
    });

});

export const captainRegister = AsyncHandler(
  async (req, res) => {

    const data = req.validated.body;

    const existingCaptain = await userModel.findOne({
      email: data.email
    });

    if (existingCaptain) {
      return res.status(409).json({
        success: false,
        message: "Email already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(
      data.password,
      10
    );

    const captain = await userModel.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: "captain"
    });

    await vehicleModel.create({
      vehicleOwner: captain._id,
      drivingLicense: data.driving_license,
      vehicleType: data.vehicleType,
      vehicleNumber: data.vehicleNumber,
      vehicleRc: data.vehicleRc,
      vehicleValidity: data.vehicleValidity
    });

    const accessToken = generateAccessToken({
      id: captain._id,
      role: captain.role
    });

    const refreshToken = generateRefreshToken({
      id: captain._id,
      role: captain.role
    });

    return res.status(201).json({
      success: true,
      message: "Captain registered successfully",
      accessToken,
      refreshToken
    });
  }
);

export const login = AsyncHandler(async(req,res)=>{
  const data = req.validated.body;

  const isExist = await userModel.findOne({email:data.email,role:req.body.role});

  if(!isExist){
    return res.status(404).json({
      message:"User not exist.",
      success:false,
    });
  }

  // password check 

  const isMatch = await bcrypt.compare(data.password,isExist.password);

  if(!isMatch){
    return res.status(404).json({
      message:"Password was as Incorrect.",
      success:false,
    });
  }

  const accessToken = generateAccessToken({id:isExist._id,role:isExist.role});
  const refreshToken = generateRefreshToken({id:isExist._id,role:isExist.role});

  return res.status(200).json({
    message:'Logged In successfully.',
    success:true,
    accessToken,
    refreshToken
  });

});