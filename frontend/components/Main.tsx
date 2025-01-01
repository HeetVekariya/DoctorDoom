"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Main = () => {
  const [formData, setFormData] = useState({
    BMI: "",
    Smoking: "",
    AlcoholDrinking: "",
    Stroke: "",
    DiffWalking: "",
    Sex: "",
    AgeCategory: "",
    Race: "",
    Diabetic: "",
    PhysicalActivity: "",
    GenHealth: "",
    SleepTime: "",
    Asthma: "",
    KidneyDisease: "",
    SkinCancer: "",
    HeartDisease: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleReset = () => {
    setFormData({
      BMI: "",
      Smoking: "",
      AlcoholDrinking: "",
      Stroke: "",
      DiffWalking: "",
      Sex: "",
      AgeCategory: "",
      Race: "",
      Diabetic: "",
      PhysicalActivity: "",
      GenHealth: "",
      SleepTime: "",
      Asthma: "",
      KidneyDisease: "",
      SkinCancer: "",
      HeartDisease: "",
    });
  };

  return (
    <main className="flex-grow grid place-items-center my-2">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Fill the details below</CardTitle>
          <CardDescription>
            Please fill the following data to get your prediction
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              {/* BMI */}
              <div className="space-y-2">
                <Label htmlFor="BMI">BMI</Label>
                <Input
                  id="BMI"
                  name="BMI"
                  type="number"
                  value={formData.BMI}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Smoking */}
              <div className="space-y-2">
                <Label>Smoking</Label>
                <RadioGroup
                  name="Smoking"
                  value={formData.Smoking}
                  onValueChange={handleSelectChange("Smoking")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="smokingYes" />
                    <Label htmlFor="smokingYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id="smokingNo" />
                    <Label htmlFor="smokingNo">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Alcohol Drinking */}
              <div className="space-y-2">
                <Label>Alcohol Drinking</Label>
                <RadioGroup
                  name="AlcoholDrinking"
                  value={formData.AlcoholDrinking}
                  onValueChange={handleSelectChange("AlcoholDrinking")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="alcoholYes" />
                    <Label htmlFor="alcoholYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id="alcoholNo" />
                    <Label htmlFor="alcoholNo">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Stroke */}
              <div className="space-y-2">
                <Label>Stroke</Label>
                <RadioGroup
                  name="Stroke"
                  value={formData.Stroke}
                  onValueChange={handleSelectChange("Stroke")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="strokeYes" />
                    <Label htmlFor="strokeYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id="strokeNo" />
                    <Label htmlFor="strokeNo">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Difficulty Walking */}
              <div className="space-y-2">
                <Label>Difficulty Walking</Label>
                <RadioGroup
                  name="DiffWalking"
                  value={formData.DiffWalking}
                  onValueChange={handleSelectChange("DiffWalking")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="diffWalkingYes" />
                    <Label htmlFor="diffWalkingYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id="diffWalkingNo" />
                    <Label htmlFor="diffWalkingNo">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Sex */}
              <div className="space-y-2">
                <Label>Sex</Label>
                <RadioGroup
                  name="Sex"
                  value={formData.Sex}
                  onValueChange={handleSelectChange("Sex")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Age Category */}
              <div className="space-y-2">
                <Label>Age Category</Label>
                <Select
                  name="AgeCategory"
                  value={formData.AgeCategory}
                  onValueChange={handleSelectChange("AgeCategory")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select age category" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "18-24",
                      "25-29",
                      "30-34",
                      "35-39",
                      "40-44",
                      "45-49",
                      "50-54",
                      "55-59",
                      "60-64",
                      "65-69",
                      "70-74",
                      "75-79",
                      "80 or older",
                    ].map((age) => (
                      <SelectItem key={age} value={age}>
                        {age}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Race */}
              <div className="space-y-2">
                <Label>Race</Label>
                <Select
                  name="Race"
                  value={formData.Race}
                  onValueChange={handleSelectChange("Race")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select race" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "White",
                      "Black",
                      "Asian",
                      "American Indian/Alaskan Native",
                      "Hispanic",
                      "Other",
                    ].map((race) => (
                      <SelectItem key={race} value={race}>
                        {race}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-6">
              {/* Diabetic */}
              <div className="space-y-2">
                <Label>Diabetic</Label>
                <Select
                  name="Diabetic"
                  value={formData.Diabetic}
                  onValueChange={handleSelectChange("Diabetic")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select diabetic status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="No">No</SelectItem>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No, borderline diabetes">
                      No, borderline diabetes
                    </SelectItem>
                    <SelectItem value="Yes (during pregnancy)">
                      Yes (during pregnancy)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Physical Activity */}
              <div className="space-y-2">
                <Label>Physical Activity</Label>
                <RadioGroup
                  name="PhysicalActivity"
                  value={formData.PhysicalActivity}
                  onValueChange={handleSelectChange("PhysicalActivity")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="physicalYes" />
                    <Label htmlFor="physicalYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id="physicalNo" />
                    <Label htmlFor="physicalNo">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* General Health */}
              <div className="space-y-2">
                <Label>General Health</Label>
                <Select
                  name="GenHealth"
                  value={formData.GenHealth}
                  onValueChange={handleSelectChange("GenHealth")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select general health" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Excellent">Excellent</SelectItem>
                    <SelectItem value="Very good">Very good</SelectItem>
                    <SelectItem value="Good">Good</SelectItem>
                    <SelectItem value="Fair">Fair</SelectItem>
                    <SelectItem value="Poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sleep Time */}
              <div className="space-y-2">
                <Label htmlFor="SleepTime">Sleep Time</Label>
                <Input
                  id="SleepTime"
                  name="SleepTime"
                  type="number"
                  value={formData.SleepTime}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter hours of sleep"
                />
              </div>

              {/* Health Conditions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Kidney Disease */}
                <div className="space-y-2">
                  <Label>Kidney Disease</Label>
                  <RadioGroup
                    name="KidneyDisease"
                    value={formData.KidneyDisease}
                    onValueChange={handleSelectChange("KidneyDisease")}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="kidneyYes" />
                      <Label htmlFor="kidneyYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0" id="kidneyNo" />
                      <Label htmlFor="kidneyNo">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Skin Cancer */}
                <div className="space-y-2">
                  <Label>Skin Cancer</Label>
                  <RadioGroup
                    name="SkinCancer"
                    value={formData.SkinCancer}
                    onValueChange={handleSelectChange("SkinCancer")}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="skinYes" />
                      <Label htmlFor="skinYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0" id="skinNo" />
                      <Label htmlFor="skinNo">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Asthma */}
                <div className="space-y-2">
                  <Label>Asthma</Label>
                  <RadioGroup
                    name="Asthma"
                    value={formData.Asthma}
                    onValueChange={handleSelectChange("Asthma")}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="asthmaYes" />
                      <Label htmlFor="asthmaYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0" id="asthmaNo" />
                      <Label htmlFor="asthmaNo">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Heart Disease */}
                <div className="space-y-2">
                  <Label>Heart Disease</Label>
                  <RadioGroup
                    name="HeartDisease"
                    value={formData.HeartDisease}
                    onValueChange={handleSelectChange("HeartDisease")}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="heartYes" />
                      <Label htmlFor="heartYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0" id="heartNo" />
                      <Label htmlFor="heartNo">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center gap-4">
          <Button variant="default" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="destructive" onClick={handleReset}>
            Reset
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Main;
