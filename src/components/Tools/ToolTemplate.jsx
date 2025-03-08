import { Input, Button, Card, CardBody } from "@nextui-org/react";

const ToolTemplate = ({ 
  inputPlaceholder, 
  buttonText, 
  handleLookup,
  renderResults,
  loading,
  error,
  value,
  onChange,
  customInput = null 
}) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardBody className="flex flex-row gap-4">
          {customInput || (
            <Input
              type="text"
              value={value}
              onChange={onChange}
              placeholder={inputPlaceholder}
              className="flex-1"
            />
          )}
          <Button
            onClick={handleLookup}
            isLoading={loading}
            className="bg-blueee-500 dark:bg-emerald-500 text-white"
          >
            {buttonText}
          </Button>
        </CardBody>
      </Card>

      {error && (
        <Card className="border-danger">
          <CardBody className="text-danger">
            {error}
          </CardBody>
        </Card>
      )}

      {renderResults && renderResults()}
    </div>
  );
};

export default ToolTemplate;
