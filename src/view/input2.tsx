import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export function InputWithButton2() {
  return (
    <div className="flex w-full max-w-prose items-center space-x-2 space-y-3 md:space-y-0 pt-5 flex-col md:flex-row px-2 md:px-0 ">
      <Input type="text" placeholder="Input email address" />
      <Button className="p-5 rounded-none md:w-48 w-auto" type="submit">Get Started</Button>
    </div>
  );
}
