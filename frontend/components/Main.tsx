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
    age: "",
    income: "",
    gender: "",
    education: "",
    maritalStatus: "",
    hasChildren: "",
    ownsCar: "",
    ownsHouse: "",
    hasCreditCard: "",
    hasLoan: "",
    isSmoker: "",
    drinkingHabit: "",
    exerciseFrequency: "",
    eatsHealthy: "",
    sleepHours: "",
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
      age: "",
      income: "",
      gender: "",
      education: "",
      maritalStatus: "",
      hasChildren: "",
      ownsCar: "",
      ownsHouse: "",
      hasCreditCard: "",
      hasLoan: "",
      isSmoker: "",
      drinkingHabit: "",
      exerciseFrequency: "",
      eatsHealthy: "",
      sleepHours: "",
    });
  };

  return (
    <main className="flex-grow grid place-items-center mt-4 mb-4">
      <Card>
        <CardHeader>
          <CardTitle>Fill the details below</CardTitle>
          <CardDescription>
            Please fill the following data to get your prediction
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="income">Annual Income</Label>
                <Input
                  id="income"
                  name="income"
                  type="number"
                  value={formData.income}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup
                  name="gender"
                  value={formData.gender}
                  onValueChange={handleSelectChange("gender")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Education Level</Label>
                <Select
                  name="education"
                  value={formData.education}
                  onValueChange={handleSelectChange("education")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="highschool">High School</SelectItem>
                    <SelectItem value="bachelor">
                      Bachelor&apos;s Degree
                    </SelectItem>
                    <SelectItem value="master">Master&apos;s Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onValueChange={handleSelectChange("maritalStatus")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Has Children</Label>
                <RadioGroup
                  name="hasChildren"
                  value={formData.hasChildren}
                  onValueChange={handleSelectChange("hasChildren")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="hasChildrenYes" />
                    <Label htmlFor="hasChildrenYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="hasChildrenNo" />
                    <Label htmlFor="hasChildrenNo">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Owns Car", name: "ownsCar" },
                { label: "Owns House", name: "ownsHouse" },
                { label: "Has Credit Card", name: "hasCreditCard" },
                { label: "Has Loan", name: "hasLoan" },
                { label: "Is Smoker", name: "isSmoker" },
              ].map((item) => (
                <div key={item.name} className="space-y-2">
                  <Label>{item.label}</Label>
                  <RadioGroup
                    name={item.name}
                    value={formData[item.name as keyof typeof formData]}
                    onValueChange={handleSelectChange(item.name)}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id={`${item.name}Yes`} />
                      <Label htmlFor={`${item.name}Yes`}>Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id={`${item.name}No`} />
                      <Label htmlFor={`${item.name}No`}>No</Label>
                    </div>
                  </RadioGroup>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="drinkingHabit">Drinking Habit</Label>
                <Select
                  name="drinkingHabit"
                  value={formData.drinkingHabit}
                  onValueChange={handleSelectChange("drinkingHabit")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select drinking habit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="occasionally">Occasionally</SelectItem>
                    <SelectItem value="socially">Socially</SelectItem>
                    <SelectItem value="regularly">Regularly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="exerciseFrequency">Exercise Frequency</Label>
                <Select
                  name="exerciseFrequency"
                  value={formData.exerciseFrequency}
                  onValueChange={handleSelectChange("exerciseFrequency")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select exercise frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="occasionally">Occasionally</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Eats Healthy</Label>
                <RadioGroup
                  name="eatsHealthy"
                  value={formData.eatsHealthy}
                  onValueChange={handleSelectChange("eatsHealthy")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="eatsHealthyYes" />
                    <Label htmlFor="eatsHealthyYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="eatsHealthyNo" />
                    <Label htmlFor="eatsHealthyNo">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sleepHours">Average Sleep Hours</Label>
                <Input
                  id="sleepHours"
                  name="sleepHours"
                  type="number"
                  value={formData.sleepHours}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="gap-2">
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
